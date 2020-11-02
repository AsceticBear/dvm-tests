# Dvm-tests

# Test list

- [x] (Transfer balance test)
- [x] (Constract test)
- [x] (Block rpc test)
- [x] (Constant rpc test)

# Usage

1. Install npm package

```sh
$ cd dvm-tests
$ npm install --save web3
$ npm install --save solc@0.6.10
```

2. Build and run darwinia-common node template.

```sh
$ cd darwinia-common
$ cargo build --release
$ ./target/release/node-template --dev --tmp
```

3. Run dvm tests

example:

```sh
$ ./node_modules/mocha/bin/mocha tests/test-balance.js
```