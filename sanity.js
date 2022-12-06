import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "db0e48kc",
  dataset: "production",
  token:
    "skCsJlAHfKrvQT2NU1oqdVtpLFbXVzRjYxgcqTHEKmspCx1IKtXIfmMHnAbTlK6giHv6Sw93Ica6sU3Lp233MKvIobF7Re1nfIqgOwiQqb8KQwNauVgAjeknUa8oMZUjTUTCTmxX877G2nomptzDmbkDo0dncNmV3OY4I2CNGHIL2DnlyZ5C",
  apiVersion: "2021-10-21",
  useCdn: true,
});

export default client;
