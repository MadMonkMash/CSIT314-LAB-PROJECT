const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();

router.post("/client-new-request", async function(req, res){
    const{
        id,
        client_id,
        request_title,
        service_type_id,
        description
    } = req.body;

    const clientNewRequest = await prisma.customer_new_request.create({
        data:{
            id,
            client_id,
            professional_service_request: { connect: { professional_request_id: professional_request_id } },
            request_title,
            service_type_id,
            request_time : new Date(),
            description
            },
    });

    res.json(clientNewRequest);
});

module.exports = router;