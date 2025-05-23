
import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";

import * as actions from "@/actions";
import { affirmationProps } from "@/types/index";
const DeleteAffirm = ({ affirmation }: { affirmation: affirmationProps }) => {
  return (
    <Form action={actions.deleteAffirm}>
      <Input type="hidden" name="inputId" value={affirmation.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteAffirm;