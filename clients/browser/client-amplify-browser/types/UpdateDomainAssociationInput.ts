import { _SubDomainSetting } from "./_SubDomainSetting";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure for update Domain Association request. </p>
 */
export interface UpdateDomainAssociationInput {
  /**
   * <p> Unique Id for an Amplify App. </p>
   */
  appId: string;

  /**
   * <p> Name of the domain. </p>
   */
  domainName: string;

  /**
   * <p> Enables automated creation of Subdomains for branches. </p>
   */
  enableAutoSubDomain?: boolean;

  /**
   * <p> Setting structure for the Subdomain. </p>
   */
  subDomainSettings: Array<_SubDomainSetting> | Iterable<_SubDomainSetting>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}