import React from 'react';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';

const data = require('./question.json')

function Formulaire() {

   const handleSubmit = (e, res) => {
      e.preventDefault();
      if(Form.Group !== "") {
        alert("Vous avez envoyer! Merci.");
      } else {
        alert("Empty!")
      }
  }

  return (
    <>
     <Form className="formulaire" onSubmit={handleSubmit}>
          {
            data.questions.map((formData, index) =>{
              return(
                <div key={index}>
                  <h2>{formData.title}</h2>
                  {
                    formData.fields.map((inputData, index) => {
                      return (
                        <Form.Group className="mb-3" key={index}>
                          <Form.Label className="dark">{inputData.label}</Form.Label>
                          <Form.Control type={inputData.type} name={inputData.name} placeholder={inputData.label}/>
                        </Form.Group>
                        )
                    })
                  }

                </div>
              )
            })

          }
        <Button type="submit" variant="secondary" size="lg">Enregistrer</Button>
      </Form>
    </>
  )
}

export default Formulaire;
