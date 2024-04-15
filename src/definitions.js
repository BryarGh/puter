/**
 * Copyright (C) 2024 Puter Technologies Inc.
 *
 * This file is part of Puter.
 *
 * Puter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
export class Service {
    //
};

export class Process {
    constructor ({ uuid, parent, name, meta }) {
        this.uuid = uuid;
        this.parent = parent;
        this.name = name;
        this.meta = meta;

        this._construct();
    }

    _construct () {}

    get type () {
        const _to_type_name = (name) => {
            return name.replace(/Process$/, '').toLowerCase();
        };
        return this.type_ || _to_type_name(this.constructor.name) ||
            'invalid'
    }
};

export class InitProcess extends Process {
    static created_ = false;

    _construct () {
        this.name = 'Puter';

        if (InitProcess.created_) {
            throw new Error('InitProccess already created');
        }

        InitProcess.created_ = true;
    }
}

export class PortalProcess extends Process {
    _construct () { this.type_ = 'app' }
};
export class PseudoProcess extends Process {
    _construct () { this.type_ = 'ui' }
};
