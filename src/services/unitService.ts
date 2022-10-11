import { notFoundError, conflictError } from '../utils/errorUtils.js';
import * as UnitRepository from '../repositories/unitRepository.js';
import * as CompanyRepository from '../repositories/companyRepository.js';


export async function getUnits() {
    return UnitRepository.getAllUnits();
}

export async function getUnitsByCompany(company: string) {
    const isCompanyValid = await CompanyRepository.getCompanyByName(company);
    if (!isCompanyValid) {
        throw notFoundError('Company not found');
    }
    return UnitRepository.getUnitsByCompany(company);
}

export async function getUnitById(id: string) {
    const unit = await UnitRepository.getUnitById(id);
    if (!unit) {
        throw notFoundError('Unit not found');
    }
    return unit;
}

export async function getUnitByName(name: string) {
    const unit = await UnitRepository.getUnitByName(name);
    if (!unit) {
        throw notFoundError('Unit not found');
    }
    return unit;
}

export async function createUnit(unit: UnitRepository.Unit) {
    const existingUnit = await UnitRepository.getUnitByName(unit.name);
    if (existingUnit) {
        throw conflictError('Unit already exists');
    }
    await UnitRepository.createUnit(unit);
}

export async function updateUnit(id: string, unit: UnitRepository.Unit) {
    const existingUnit = await UnitRepository.getUnitById(id);
    if (!existingUnit) {
        throw notFoundError('Unit not found');
    }
    await UnitRepository.updateUnit(id, unit);
}

export async function deleteUnit(id: string) {
    const existingUnit = await UnitRepository.getUnitById(id);
    if (!existingUnit) {
        throw notFoundError('Unit not found');
    }
    await UnitRepository.deleteUnit(id);
}