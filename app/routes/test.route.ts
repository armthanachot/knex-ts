/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"

import {findAll,findById,create,update,destroy} from "../controllers/test/test.controller"

export default (prefix,app)=>{
    app.route(`${prefix}`).get([],findAll).post([],create)
    app.route(`${prefix}/:id`).get([],findById).put([],update).delete([],destroy)

}