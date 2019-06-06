// -----------------------------------------------------------------------
// <copyright file="branches-data.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
// import {BusinesObjectModel} from '../../Models/BusinesObjectModel';

@Injectable({
    providedIn: 'root'
})
export class BranchesDataService {

    constructor() {
    }

    /**
     * Mock branches
     */
    public MockBranches() {
        return [{
            isActive: true,
            id: 1,
            number: 1,
            matchcode: 'SP',
            designation: 'Spedition'
        }, {
            isActive: true,
            id: 2,
            number: 2,
            matchcode: 'TU',
            designation: 'Transportunternehmen'
        }, {
            isActive: true,
            id: 3,
            number: 3,
            matchcode: 'V',
            designation: 'Verlader'
        }, {
            isActive: true,
            id: 4,
            number: 4,
            matchcode: 'VS',
            designation: 'Verlader mit SAP'
        }, {
            isActive: true,
            id: 5,
            number: 5,
            matchcode: 'UB',
            designation: 'Unternehmensberatung'
        }, {
            isActive: true,
            id: 6,
            number: 6,
            matchcode: 'HH',
            designation: 'Hardwarehändler'
        }, {
            isActive: true,
            id: 7,
            number: 7,
            matchcode: 'P',
            designation: 'Presse'
        }, {
            isActive: true,
            id: 8,
            number: 8,
            matchcode: 'S',
            designation: 'Schule'
        }, {
            isActive: true,
            id: 9,
            number: 9,
            matchcode: 'VB',
            designation: 'Verband / Verein'
        }, {
            isActive: true,
            id: 10,
            number: 10,
            matchcode: 'B',
            designation: 'Behörden'
        }, {
            isActive: true,
            id: 13,
            number: 13,
            matchcode: 'SPS',
            designation: 'Spedition mit SAP'
        }, {
            isActive: true,
            id: 4000180295,
            number: 15,
            matchcode: 'KS001',
            designation: 'Something-ks'
        }, {
            isActive: true,
            id: 4000180296,
            number: 16,
            matchcode: 'GSD',
            designation: 'Something-nd'
        }, {
            isActive: true,
            id: 4000181235,
            number: 334418,
            matchcode: 'TEST',
            designation: 'TEST334418'
        }, {
            isActive: true,
            id: 4000180218,
            number: 14,
            matchcode: 'NC',
            designation: 'Nenad Trans'
        }, {
            isActive: true,
            id: 4000180297,
            number: 166,
            matchcode: 'NCC',
            designation: 'Raso trans dvojka ugiuiuy'
        }, {
            isActive: true,
            id: 4000181395,
            number: 334420,
            matchcode: 'TEST',
            designation: 'TEST334420'
        }, {
            isActive: true,
            id: 4000181396,
            number: 334421,
            matchcode: 'TEST',
            designation: 'TEST334421'
        }];
    }
}
