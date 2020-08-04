import { Request, Response} from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {

async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
        return response.status(400).json({
            error: 'Missisng filters to search classes'
        })
    }   

    const timeInMinutes = convertHourToMinutes(filters.time as string);

    const classes = await db('classes')
        .where('classes.subject', "=", subject);
    return response.json(classes);
    
}

 async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
    
        const user_id = insertedUsersId[0];
    
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id
            });
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return{
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to)
        };    
        });
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit();
    
        return response.status(201).send();
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creatng new class'
            });
        } 
    
    }
}