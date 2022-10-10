import { Request, Response } from 'express';

import * as CompanyService from '../services/companyService.js';

export async function getCompanyById(req: Request, res: Response) {
    const { id } = req.params;
    const company = await CompanyService.getCompanyById(id);
    res.status(200).send(company);
}

export async function getCompanyByName(req: Request, res: Response) {
    const { name } = req.params;
    const company = await CompanyService.getCompanyByName(name);
    res.status(200).send(company);
}

export async function createCompany(req: Request, res: Response) {
    const { name } = req.body;
    await CompanyService.createCompany(name);
    res.status(201).send();
}

export async function updateCompany(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    await CompanyService.updateCompany(id, name);
    res.status(204).send();
}

export async function deleteCompany(req: Request, res: Response) {
    const { id } = req.params;
    await CompanyService.deleteCompany(id);
    res.status(204).send();
}