import { useAppDispatch } from "../../hooks/redux";
import { Note, editNote } from "../../redux/note/sliceNote";
import { Button, FormGroup, FormWrapper, Input, Label, Select, TextArea } from "./FormEdit.styled"
import { FC, useState, useEffect } from 'react';

interface Edit {
  currentNoteEdit: Note | null,
  handleToggle: () => void
}



const FormEdit: FC<Edit> = ({currentNoteEdit, handleToggle}) => {
  const [formData, setFormData] = useState<Note | null>(currentNoteEdit);
  const dispatch = useAppDispatch()
  // const [name, setName] = useState('')
  // const [category, setCategory] = useState('')
  // const [content, setContent] = useState('')
  // const [dates, setDates] = useState('')
  // useEffect(() => {
  //   setFormData(currentNoteEdit);
  // }, [currentNoteEdit]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
   
    switch (id) {
      case 'name':
        setFormData(pS => ({
          ...pS!,
          name: value,
        }));
        break;
  
      case 'category':
        setFormData(pS => ({
          ...pS!,
          category: value,
        }));
        break;
  
      case 'content':
        setFormData(pS => ({
          ...pS!,
          content: value,
        }));
        break;
  
        case 'dates':
case 'dates':
  setFormData(prevData => ({
    ...prevData!,
    dates: [...prevData?.dates, value], 
  }));
  break;
  
      default:
        break;
    }
  }
console.log(formData?.dates, 'qqqqqqqqqqqqqqqqqqqqqqqqqqq')
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(formData !== null){

dispatch(editNote(formData))
handleToggle()
}

  }
  if(!formData) return
  
    return (
        <>
        <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" value={formData.name} onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="category">Category:</Label>
        <Select id="category" value={formData.category} onChange={handleChange}>
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
          <option value="Quote">Quote</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="content">Content:</Label>
        <TextArea id="content" value={formData.content} onChange={handleChange}></TextArea>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="dates">Date:</Label>
        <Input type="date" id="dates" value={formData.dates} onChange={handleChange}/>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </FormWrapper>
        </>
    )
}

export default FormEdit;