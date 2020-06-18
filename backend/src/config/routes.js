const express = require('express')

module.exports = function(server) {
    //URL base
    const router = express.Router()
    server.use('/api', router)

    //rotas de ciclo de pagamentos
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router, '/billingCycles')
}