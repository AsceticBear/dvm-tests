# Dvm-tests

# Test list

-[x](Check init account balances)
-[x](Check transfer result)
-[](Check constract deploy)
-[](Check block relevant rpc)
-[](Check rpc constants)

# Usage

1. Build and run darwinia-common node template.

```sh
$ cd darwinia-common
$ cargo build --release
$ ./target/release/node-template --dev --tmp
```

2. Run dvm tests

example:

```sh
$ ./node_modules/mocha/bin/mocha tests/test-balance.js
```