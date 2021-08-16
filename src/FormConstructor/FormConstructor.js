// Сверстать форму согласно макетам
// https://www.figma.com/file/rPgUBStbtm2S7ySOQ4Lhb3/test-css-form

// примечания:
// 1. не обязательно пиксель перфект
// 2. использовать css-grid
// 3. использовать css модули
// 4. можно менять структуру react элементов

import { Form } from "antd";

import { Label } from "uiKit/Label";
import { CustomButton } from "uiKit/CustomButton/CustomButton";

import s from "./form-constructor.module.scss";

const FormItem = Form.Item;

const initialValues = {
  firstName: "John",
  lastName: "Brown",
  sex: "male",
  address: "New York No. 1 Lake Park",
  age: 32
};

export const FormConstructor = ({ onCancel }) => {
  return (
    <div>
      <Form className={s.form} initialValues={initialValues} labelAlign="left" colon={false}>
        <FormItem className={s.formItem} label="First Name" name="firstName">
          <Label />
        </FormItem>

        <FormItem className={s.formItem} label="Last Name" name="lastName">
          <Label />
        </FormItem>

        <FormItem className={s.formItem} label="Sex" name="sex">
          <Label />
        </FormItem>

        <FormItem className={s.formItem} label="Age" name="age">
          <Label />
        </FormItem>

        <FormItem className={s.formItem} label="Address" name="address">
          <Label />
        </FormItem>
      </Form>

      <div className={s.action}>
        <CustomButton onClick={onCancel}>Ок</CustomButton>
        <CustomButton type="primary" onClick={onCancel}>
          Закрыть
        </CustomButton>
      </div>
    </div>
  );
};
