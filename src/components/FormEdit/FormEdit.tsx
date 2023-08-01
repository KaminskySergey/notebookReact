import { useAppDispatch } from "../../hooks/redux";
import { Note, editNote } from "../../redux/note/sliceNote";
import { Button, FormGroup, FormWrapper, Input, Label, Select, TextArea } from "./FormEdit.styled"
import { FC, useState } from 'react';

interface Edit {
  currentNoteEdit: Note | null,
  handleToggle: () => void
}



const FormEdit: FC<Edit> = ({currentNoteEdit, handleToggle}) => {
  const [formData, setFormData] = useState<Note | null>(currentNoteEdit);
  const [currTime, setCurrTime] = useState<any>('')
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    switch (id) {
      case 'name':
        setFormData(prevData => ({
          ...prevData!,
          name: value,
        }));
        break;

      case 'category':
        setFormData(prevData => ({
          ...prevData!,
          category: value,
        }));
        break;

      case 'content':
        setFormData(prevData => ({
          ...prevData!,
          content: value,
        }));
        break;

      case 'arrayOfDate':
        setCurrTime(value)
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData !== null) {
      const updatedNote: Note = {
        ...formData, arrayOfDate: currTime
      };
      dispatch(editNote(updatedNote));
      handleToggle();
    }
  }

  if (!formData) return null;
  
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
        <Label htmlFor="arrayOfDate">Date:</Label>
        <Input type="date" id="arrayOfDate" value={currTime} onChange={handleChange}/>
      </FormGroup>
      <Button type="submit">Edit</Button>
    </FormWrapper>
        </>
    )
}

export default FormEdit;