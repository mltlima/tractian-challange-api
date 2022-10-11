import { notFoundError, conflictError } from '../utils/errorUtils.js';

import * as CompanyRepository from '../repositories/companyRepository.js';

export async function getCompanies() {
    return CompanyRepository.getAllCompanies();
}

export async function getCompanyById(id: string) {
    const company = await CompanyRepository.getCompanyById(id);
    if (!company) {
        throw notFoundError('Company not found');
    }
    return company;
}

export async function getCompanyByName(name: string) {
    const company = await CompanyRepository.getCompanyByName(name);
    if (!company) {
        throw notFoundError('Company not found');
    }
    return company;
}

export async function createCompany(name: string) {
    const existingCompany = await CompanyRepository.getCompanyByName(name);
    if (existingCompany) {
        throw conflictError('Company already exists');
    }
    await CompanyRepository.createCompany(name);
}

export async function updateCompany(id: string, name: string) {
    const existingCompany = await CompanyRepository.getCompanyById(id);
    if (!existingCompany) {
        throw notFoundError('Company not found');
    }
    await CompanyRepository.updateCompany(id, name);
}

export async function deleteCompany(id: string) {
    const existingCompany = await CompanyRepository.getCompanyById(id);
    if (!existingCompany) {
        throw notFoundError('Company not found');
    }
    await CompanyRepository.deleteCompany(id);
}