
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import * as actions from "@/actions";
import { FaCheck } from "react-icons/fa";
import { affirmationProps } from "@/types/index";

const ChangeAffirm = ( {affirmation }: { affirmation: affirmationProps }) => {
  return (
    <Form action={actions.changeStatus}>
      <Input name="inputId" value={affirmation.id} type="hidden"></Input>
      <Button
        text={<FaCheck />}
        type="submit"
        actionButton
        bgColor={affirmation.wasSaid ? "bg-green-400" : "bg-blue-500"}
      ></Button>
    </Form>
  );
};

export default ChangeAffirm;