import {FC, useState, useEffect} from "react"
import { Button, FormGroup, FormWrapper, Input, Label, Select, TextArea } from "./FormCreate.styled";
import { useAppDispatch } from "../../hooks/redux";
import { Note, addNote } from "../../redux/note/sliceNote";



interface Create {
    handleToggle: () => void
  }

const FormCreate: FC<Create> = () => {
  //   const [formData, setFormData] = useState<Note | null>(null);
  // const [currTime, setCurrTime] = useState<any>('')
  // const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (currentNoteEdit) {
//       setFormData(currentNoteEdit);
//     }
//   }, [currentNoteEdit]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  //   const { id, value } = e.target;

  //   switch (id) {
  //     case 'name':
  //       setFormData(prevData => ({
  //         ...prevData!,
  //         name: value,
  //       }));
  //       break;

  //     case 'category':
  //       setFormData(prevData => ({
  //         ...prevData!,
  //         category: value,
  //       }));
  //       break;

  //     case 'content':
  //       setFormData(prevData => ({
  //         ...prevData!,
  //         content: value,
  //       }));
  //       break;

  //     case 'arrayOfDate':
  //       setCurrTime(value)
  //       break;

  //     default:
  //       break;
  //   }
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (formData !== null) {
    //   const updatedNote: Note = {
    //     ...formData, arrayOfDate: currTime
    //   };
    //   // dispatch(addNote(updatedNote));
    //   // handleToggle();
    // }
  }

  // if (!formData) return null;
  
    return (
        <>
        <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="category">Category:</Label>
        <Select id="category" >
          <option value="Quote">Quote</option>
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="content">Content:</Label>
        <TextArea id="content" ></TextArea>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="arrayOfDate">Date:</Label>
        <Input type="date" id="arrayOfDate" />
      </FormGroup>
      <Button type="submit">Create</Button>
    </FormWrapper>
        </>
    )
}

export default FormCreate