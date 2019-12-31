const db = require('../connection')
const express = require('express');
const router = express.Router();

router.post('/',(req,res) => {
    const sql = "SET @id = ?, @name = ? @domain = ? @salary = ?; \
                    CALL employees.employeeAddOrEdit(@id,@name,@domain,@salary);"

    db.query(sql,[req.body.id,req.body.name,req.body.domain,req.body.salary],(err,rows,fields) => {
        if(!err) {
            res.status(200).send(rows)
        }
        else{
            res.status(400).send(err)
        }
    })
})


router.get('/', (req,res) => {
    db.query('SELECT * FROM employee', (err,rows,fields) => {
        if(!err) {
            res.status(200).send(rows)
        }
        else{
            res.status(400).send(err)
        }
    })
})

router.get('/:empid',(req,res) => {
    db.query(`SELECT * FROM employee WHERE id = ${req.params.empid}`, (err,rows,fields) => {
        if(!err) {
            res.status(200).send(rows)
        }
        else{
            res.status(400).send(err)
        }
    })
})

router.delete('/:empid',(req,res) => {
    db.query('DELETE FROM employee WHERE id = ?',[req.params.empid],(err,rows,fields) => {
        if(!err) {
            res.status(200).send(rows)
        }
        else{
            res.status(400).send(err)
        }
    })
})

module.exports = router;