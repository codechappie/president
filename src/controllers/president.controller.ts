import { Request, Response, response } from 'express';
import {connect} from '../database'

import { President } from '../interface/president.interface'

export async function getPresidents(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const presidents = await conn.query('SELECT * FROM presidents');
    return res.json(presidents[0]);
}

export async function createPresident(req: Request, res: Response) {
    const newPresident: President = req.body;
    const conn = await connect();
    console.log(newPresident)
    await conn.query('INSERT INTO presidents SET ?', [newPresident]);
    return res.json({
        "message": "president added"
    });
};

export async function getPresident(req: Request, res: Response): Promise<Response> {
    const id = req.params.presidentId;
    const conn = await connect();
    const president = await conn.query('SELECT * FROM presidents WHERE id = ?', [id]);
    return res.json(president[0]);
};

export async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.presidentId;
    const conn = connect();

    await conn.query("DELETE FROM presidents WHERE id = ?", [id]);
    return res.json({
        "message": "President eliminated successfully"
    });
}

export async function updatePresident( req: Request, res: Response): Promise<Response> {
    const id = req.params.presidentId;
    const updatePresident: President = req.body;
    const conn = await connect();

    await conn.query('UPDATE presidents SET ? WHERE id = ?', [updatePresident, id]);
    return res.json({
        "message": "President updated"
    })
}