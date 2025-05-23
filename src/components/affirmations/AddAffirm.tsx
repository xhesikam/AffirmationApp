// import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

const AddAffirm = () => {
  return (
    <div>
   //   <Form action={actions.createAffrim}>
   <Form>
        <div className="flex gap-4 items-center">
          <Input name="input" type="text" placeholder="Add Todo Here..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddAffirm;