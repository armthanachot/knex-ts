/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { responseMessages } from "../../utils/app";

// MODEL
import * as testModel from "../../models/test.model"

const findAll = async(req,res)=>{
    try {
        const data = await testModel.findAll()
        const raw_query = await testModel.findAllRaw()
        return res
      .status(StatusCodes.OK)
      .json(responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK),raw_query));
    } catch (error) {
        console.log(error);
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)));

    }
}

const findById = async(req,res)=>{
    try {
        const {id} = req.params
        const user = await testModel.findById(id)
        return res
      .status(StatusCodes.OK)
      .json(responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK),user));
        
    } catch (error) {
        console.log(error);
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)));
        
    }
}

const create = async(req,res)=>{
    try {
        const users = [
            {
                name:"Thanachot Tesjaroen",
                email:"armtest@mail.com"
            }
        ]
        const created = await testModel.create(users)
        return res
        .status(StatusCodes.OK)
        .json(responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK),created));
    } catch (error) {
        console.log(error);
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)));

    }
}


const update = async(req,res)=>{
    try {
        const {id} = req.params
        const user = {
            name:"TestArm",
            email:"testArm@mail.com"
        }
        const updated = await testModel.update(id,user)
        return res
        .status(StatusCodes.OK)
        .json(responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK),updated));

    } catch (error) {
        console.log(error);
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)));
    }
}

const destroy = async(req,res)=>{
    try {
        const {id} = req.params
        const deleted = await testModel.destroy(id)
        return res
        .status(StatusCodes.OK)
        .json(responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK),deleted));
    } catch (error) {
        console.log(error);
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(responseMessages(StatusCodes.INTERNAL_SERVER_ERROR, getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)));
    }
}
export {
    findAll,
    findById,
    create,
    update,
    destroy
}