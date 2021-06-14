import React,{useEffect, useState} from 'react'
import NoteCard from './Component/NoteCards'

import { Typography, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


import 'firebase/firestore';
import { useFirestore } from 'reactfire';

const myTheme = createMuiTheme({
  typography: {
    fontSize: 18,
    fontFamily: 'Teko',
    h2: {
      color: "#00BFA5"
    }
  },
  palette: {
    text: {
      primary: "#424B54"
    }
  }
});

const myStyle = makeStyles({
  title: {
    marginBottom: 50,
  },
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%'
  },
  card: {
    backgroundColor: '#424B54'
  }
})

export default function App(){

  const styleClass = myStyle();

  const [notes, setNotes] = useState([]);

  const ref = useFirestore().collection('notes')

function getNotes(){
  ref.onSnapshot((querySnapshot)=>{
    const items = [];
    querySnapshot.forEach((doc)=>{
      items.push(doc.data());
    });
    setNotes(items);
  });
}
  useEffect(()=>{
    getNotes();
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <Container className={styleClass.page}>
        <Typography
          className={styleClass.title}
          variant="h2"
          align="center"
        >
          Devlift Blog Posts
        </Typography>

        <Container className={styleClass.card}>
          <Grid container spacing={3}>
            {notes.map(note => (
              <Grid item key={note.id} md={4} lg={3}>
                  <NoteCard item={note}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </ThemeProvider>
  )

}

