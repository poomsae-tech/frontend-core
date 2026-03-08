import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import type { HTMLInputTypeAttribute } from "react";

import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export type FormInputFieldType<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: HTMLInputTypeAttribute;
  isDisabled?: boolean;
  isLoading?: boolean;
};

type FieldControllerProps<T extends FieldValues> = FormInputFieldType<T> & {
  control: Control<T>;
  className?: string;
};

export function FieldController<T extends FieldValues>({
  name,
  label,
  type = "text",
  isDisabled = false,
  isLoading = false,
  control,
  className,
}: FieldControllerProps<T>) {
  const isInputDisabled = isDisabled || isLoading;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          className={cn("gap-1", className)}
          data-invalid={fieldState.invalid}
        >
          <FieldLabel
            htmlFor={name}
            className={cn(
              "ml-1 transition-opacity",
              isInputDisabled && "opacity-75 cursor-not-allowed",
            )}
          >
            {label}
          </FieldLabel>
          <Input
            {...field}
            id={name}
            type={type}
            aria-invalid={fieldState.invalid}
            disabled={isInputDisabled}
            className={cn(
              "transition-all",
              isLoading && "animate-pulse cursor-wait",
              isInputDisabled && "disabled:opacity-100 disabled:bg-input/25 ",
            )}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
