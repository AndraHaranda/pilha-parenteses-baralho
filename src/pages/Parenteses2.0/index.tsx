import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function App() {
  const[expressao, SetExpressao] = useState<string>('')
  const[mensagem, SetMensagem] = useState<string>('')
  const classes = useStyles();

  function validar(expressao: string): boolean {
    let pilha: string[] = [];
    for (let i = 0; i < expressao.length; i++) {
      const letra = expressao[i];
      if (letra === "(") {
        pilha = [letra, ...pilha];
      }
      if (letra === ")") {
        if (pilha.length > 0) {
          pilha.shift();
        } else {
          return false;
        }
      }
      if (letra === "{") {
        pilha = [letra, ...pilha];
      }
      if (letra === "}") {
        if (pilha.length > 0) {
          pilha.shift();
        } else {
          return false;
        }
      }
      if (letra === "[") {
        pilha = [letra, ...pilha];
      }
      if (letra === "]") {
        if (pilha.length > 0) {
          pilha.shift();
        } else {
          return false;
        }
      }
    }
    return pilha.length === 0;
  }
  
  function HandleValidar(){
    const valido = validar(expressao)
    if (valido) {
        SetMensagem('Sua expressão está correta :)')
    }
    else{
      SetMensagem('Sua expressão está incorreta :(')
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    <TextField id="outlined-basic" label="Inserir" variant="outlined" onChange={(e)=>{SetExpressao(e.target.value)}}/>
    <Button onClick={HandleValidar}>Validar</Button>
    <Typography component="h3" variant="h3">
    {mensagem}
    </Typography>
    </Grid>
  );
}

