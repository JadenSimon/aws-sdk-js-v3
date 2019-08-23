import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateJob } from "../model/operations/CreateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateJobInput } from "../types/CreateJobInput";
import { CreateJobOutput } from "../types/CreateJobOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/CreateJobInput";
export * from "../types/CreateJobOutput";
export * from "../types/CreateJobExceptionsUnion";

export class CreateJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateJobInput,
      OutputTypesUnion,
      CreateJobOutput,
      S3ControlResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateJobInput,
    CreateJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateJobInput, CreateJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateJobInput, CreateJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}