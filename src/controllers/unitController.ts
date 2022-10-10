import { Request, Response } from 'express';

import * as UnitService from '../services/unitService.js';

export async function getUnitById(req: Request, res: Response) {
    const { id } = req.params;
    const unit = await UnitService.getUnitById(id);
    res.status(200).send(unit);
}

export async function getUnitByName(req: Request, res: Response) {
    const { name } = req.params;
    const unit = await UnitService.getUnitByName(name);
    res.status(200).send(unit);
}

export async function createUnit(req: Request, res: Response) {
    const { name, company } = req.body;
    await UnitService.createUnit({ name, company });
    res.status(201).send();
}

export async function updateUnit(req: Request, res: Response) {
    const { id } = req.params;
    const { name, company } = req.body;
    await UnitService.updateUnit(id, { name, company });
    res.status(204).send();
}

export async function deleteUnit(req: Request, res: Response) {
    const { id } = req.params;
    await UnitService.deleteUnit(id);
    res.status(204).send();
}