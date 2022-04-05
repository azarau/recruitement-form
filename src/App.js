import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import faker from "faker";

import Form from "./Form";
import Table1 from "./Table1";
export default function App() {
  return (
    <div>
      <Form />
      <Table1 />
    </div>
  );
}
