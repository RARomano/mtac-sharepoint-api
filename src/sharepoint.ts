import { SPFetchClient } from "@pnp/nodejs-commonjs";
import { sp } from "@pnp/sp-commonjs";

const configure = (
  tenant: string,
  clientId: string,
  clientSecret: string
): void => {
  sp.setup({
    sp: {
      fetchClientFactory: () => {
        return new SPFetchClient(tenant, clientId, clientSecret);
      }
    }
  });
};

export { configure };