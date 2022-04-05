import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import faker from "faker";

import logo from "./logo.png";

const t1 = { margin: 5, padding: 2 };
const b1 = { margin: 10, width: "95%" };

export default function Form() {
  const [values, setValues] = React.useState({
    name: "",
    age: ""
  });
  const handleChange = (prop) => (e) => {
    var val = e.target.value;
    var value = val.toUpperCase();
    setValues({ ...values, [prop]: value });
  };

  const handleClick = (e, id) => {
    e.preventDefault();

    switch (id) {
      case "demo":
        var name = faker.random.arrayElement(["Auwal", "Kande", "Ladidi"]);
        var qualification = faker.random.arrayElement([
          "Degree",
          "HND",
          "Diploma",
          "NCE"
        ]);
        var randomEmail = faker.internet.email();
        var age = faker.datatype.number({ min: 18, max: 30 });
        setValues({
          name: name,
          age: age,
          qualification: qualification,
          email: email
        });
        break;

      case "submit":
        console.log("you click submit");
        break;
      default:
        break;
    }
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div style={{ textAlign: "center" }}>
          <img src={logo} style={{ height: 70 }} />
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          BEL Recruitment Form <br />
          <br />
        </Typography>

        <Paper elevation={3} style={{ width: 400, margin: 5, padding: 5 }}>
          <TextField
            value={values.name}
            fullWidth
            style={t1}
            id="name"
            name="name"
            label="Name"
            onChange={handleChange("name")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.qualification}
            fullWidth
            style={t1}
            id="qualification"
            name="qualification"
            label="Qualification"
            onChange={handleChange("qualification")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.age}
            fullWidth
            style={t1}
            id="age"
            name="age"
            label="Age"
            onChange={handleChange("age")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.email}
            fullWidth
            style={t1}
            id="email"
            name="email"
            label="Email"
            onChange={handleChange("email")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <Button
            onClick={(e) => handleClick(e, "demo")}
            style={b1}
            variant="contained"
            color="success"
          >
            Demo
          </Button>
          <br />
          <br />
          <Button
            onClick={(e) => handleClick(e, "send")}
            style={b1}
            variant="contained"
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
