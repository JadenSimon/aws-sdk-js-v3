import {
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
} from "../XRayClient";
import {
  GetEncryptionConfigRequest,
  GetEncryptionConfigResult
} from "../models/index";
import {
  deserializeAws_restJson1_1GetEncryptionConfigCommand,
  serializeAws_restJson1_1GetEncryptionConfigCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetEncryptionConfigCommandInput = GetEncryptionConfigRequest;
export type GetEncryptionConfigCommandOutput = GetEncryptionConfigResult;

export class GetEncryptionConfigCommand extends $Command<
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEncryptionConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetEncryptionConfigCommandInput,
    GetEncryptionConfigCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEncryptionConfigCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetEncryptionConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetEncryptionConfigCommandOutput> {
    return deserializeAws_restJson1_1GetEncryptionConfigCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}