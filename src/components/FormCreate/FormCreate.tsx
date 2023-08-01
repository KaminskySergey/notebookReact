import {FC, useState} from "react"
import { Button, FormGroup, FormWrapper, Input, Label, Select, TextArea } from "./FormCreate.styled";
import { useAppDispatch } from "../../hooks/redux";
import { addNote } from "../../redux/note/sliceNote";

import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";

interface Create {
    handleToggle: () => void
  }

// interface AddNote {
//   name: string, category: string, content: string, arrayOfDate: string, dates: string[], archived: boolean, time: Date, id: string
// }

const FormCreate: FC<Create> = ({handleToggle}) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Quote')
  const [content, setContent] = useState('')
  const [arrayOfDate, setArrayOfDate] = useState('')
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    switch (id) {
      case 'name':
        setName(value);
        break;

      case 'category':
        setCategory(value)
        break;

      case 'content':
        setContent(value)
        break;

      case 'arrayOfDate':
        setArrayOfDate(value)
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    
    const selectedDate = new Date(Date.parse(arrayOfDate));
  
   
    if (isNaN(selectedDate.getTime())) {
      alert('Please enter a valid date.');
      return;
    }
  
    const currentDate = new Date();
    if (selectedDate.getTime() < currentDate.getTime()) {
      alert('Please enter a future date and time.');
      return;
    }
  
    const id = uuidv4();
    const formattedDate = format(selectedDate, 'dd/MM/yyyy');
    const currentData = format(new Date(), 'dd MMM yyyy, hh:mm a');
    const createNote: any = {
      name,
      category,
      content,
      arrayOfDate: formattedDate,
      dates: [],
      archived: false,
      time: currentData,
      id,
    };
  
    dispatch(addNote(createNote));
    handleToggle();
  };

  
  
    return (
        <>
        <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" onChange={handleChange} value={name}/>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="category">Category:</Label>
        <Select id="category" onChange={handleChange} value={category}>
          <option value="Quote">Quote</option>
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="content">Content:</Label>
        <TextArea id="content" onChange={handleChange} value={content}></TextArea>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="arrayOfDate">Date:</Label>
        <Input type="date" id="arrayOfDate" onChange={handleChange} value={arrayOfDate}/>
      </FormGroup>
      <Button type="submit">Create</Button>
    </FormWrapper>
        </>
    )
}

export default FormCreate