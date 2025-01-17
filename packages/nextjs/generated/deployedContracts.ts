const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        AccountFactory: {
          address: "0xD617C27B3c3372d84285B158d265F255417738cF",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEntryPoint",
                  name: "_entryPoint",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "accountImplementation",
              outputs: [
                {
                  internalType: "contract Account",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "createAccount",
              outputs: [
                {
                  internalType: "contract Account",
                  name: "ret",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        EntryPoint: {
          address: "0xF3451a5836015FfC5C42cAe23F3283b68458c912",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "preOpGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
                {
                  internalType: "uint48",
                  name: "validAfter",
                  type: "uint48",
                },
                {
                  internalType: "uint48",
                  name: "validUntil",
                  type: "uint48",
                },
                {
                  internalType: "bool",
                  name: "targetSuccess",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "targetResult",
                  type: "bytes",
                },
              ],
              name: "ExecutionResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "opIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "reason",
                  type: "string",
                },
              ],
              name: "FailedOp",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "SenderAddressResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureValidationFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResult",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "stake",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "unstakeDelaySec",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct IStakeManager.StakeInfo",
                      name: "stakeInfo",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct IEntryPoint.AggregatorStakeInfo",
                  name: "aggregatorInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResultWithAggregation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "factory",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
              ],
              name: "AccountDeployed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "BeforeExecution",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalDeposit",
                  type: "uint256",
                },
              ],
              name: "Deposited",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureAggregatorChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalStaked",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "unstakeDelaySec",
                  type: "uint256",
                },
              ],
              name: "StakeLocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "withdrawTime",
                  type: "uint256",
                },
              ],
              name: "StakeUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "StakeWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasUsed",
                  type: "uint256",
                },
              ],
              name: "UserOperationEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "revertReason",
                  type: "bytes",
                },
              ],
              name: "UserOperationRevertReason",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Withdrawn",
              type: "event",
            },
            {
              inputs: [],
              name: "SIG_VALIDATION_FAILED",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "paymasterAndData",
                  type: "bytes",
                },
              ],
              name: "_validateSenderAndPaymaster",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
              ],
              name: "addStake",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "depositTo",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "deposits",
              outputs: [
                {
                  internalType: "uint112",
                  name: "deposit",
                  type: "uint112",
                },
                {
                  internalType: "bool",
                  name: "staked",
                  type: "bool",
                },
                {
                  internalType: "uint112",
                  name: "stake",
                  type: "uint112",
                },
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
                {
                  internalType: "uint48",
                  name: "withdrawTime",
                  type: "uint48",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getDepositInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint112",
                      name: "deposit",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "staked",
                      type: "bool",
                    },
                    {
                      internalType: "uint112",
                      name: "stake",
                      type: "uint112",
                    },
                    {
                      internalType: "uint32",
                      name: "unstakeDelaySec",
                      type: "uint32",
                    },
                    {
                      internalType: "uint48",
                      name: "withdrawTime",
                      type: "uint48",
                    },
                  ],
                  internalType: "struct IStakeManager.DepositInfo",
                  name: "info",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
              ],
              name: "getSenderAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "getUserOpHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "initCode",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "callData",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "paymasterAndData",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "signature",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct UserOperation[]",
                      name: "userOps",
                      type: "tuple[]",
                    },
                    {
                      internalType: "contract IAggregator",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                  name: "opsPerAggregator",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleAggregatedOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation[]",
                  name: "ops",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "incrementNonce",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "callData",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "address",
                          name: "paymaster",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct EntryPoint.MemoryUserOp",
                      name: "mUserOp",
                      type: "tuple",
                    },
                    {
                      internalType: "bytes32",
                      name: "userOpHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "contextOffset",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct EntryPoint.UserOpInfo",
                  name: "opInfo",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "context",
                  type: "bytes",
                },
              ],
              name: "innerHandleOp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "",
                  type: "uint192",
                },
              ],
              name: "nonceSequenceNumber",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "op",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "targetCallData",
                  type: "bytes",
                },
              ],
              name: "simulateHandleOp",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "simulateValidation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unlockStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
              ],
              name: "withdrawStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "withdrawAmount",
                  type: "uint256",
                },
              ],
              name: "withdrawTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        NBANFT: {
          address: "0x485C10518BF09FF5E2d08C700708d79E889Bc0Ca",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "image",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC721Metadata__URI_QueryFor_NonExistentToken",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTokenCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "mintNft",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "svg",
                  type: "string",
                },
              ],
              name: "svgToImageURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Token: {
          address: "0x6f77063e7278797Eaa2E9b643D8d822e13Da07C4",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        AccountFactory: {
          address: "0xD617C27B3c3372d84285B158d265F255417738cF",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEntryPoint",
                  name: "_entryPoint",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "accountImplementation",
              outputs: [
                {
                  internalType: "contract Account",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "createAccount",
              outputs: [
                {
                  internalType: "contract Account",
                  name: "ret",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        EntryPoint: {
          address: "0xF3451a5836015FfC5C42cAe23F3283b68458c912",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "preOpGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
                {
                  internalType: "uint48",
                  name: "validAfter",
                  type: "uint48",
                },
                {
                  internalType: "uint48",
                  name: "validUntil",
                  type: "uint48",
                },
                {
                  internalType: "bool",
                  name: "targetSuccess",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "targetResult",
                  type: "bytes",
                },
              ],
              name: "ExecutionResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "opIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "reason",
                  type: "string",
                },
              ],
              name: "FailedOp",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "SenderAddressResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureValidationFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResult",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "stake",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "unstakeDelaySec",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct IStakeManager.StakeInfo",
                      name: "stakeInfo",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct IEntryPoint.AggregatorStakeInfo",
                  name: "aggregatorInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResultWithAggregation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "factory",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
              ],
              name: "AccountDeployed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "BeforeExecution",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalDeposit",
                  type: "uint256",
                },
              ],
              name: "Deposited",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureAggregatorChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalStaked",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "unstakeDelaySec",
                  type: "uint256",
                },
              ],
              name: "StakeLocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "withdrawTime",
                  type: "uint256",
                },
              ],
              name: "StakeUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "StakeWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasUsed",
                  type: "uint256",
                },
              ],
              name: "UserOperationEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "revertReason",
                  type: "bytes",
                },
              ],
              name: "UserOperationRevertReason",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Withdrawn",
              type: "event",
            },
            {
              inputs: [],
              name: "SIG_VALIDATION_FAILED",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "paymasterAndData",
                  type: "bytes",
                },
              ],
              name: "_validateSenderAndPaymaster",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
              ],
              name: "addStake",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "depositTo",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "deposits",
              outputs: [
                {
                  internalType: "uint112",
                  name: "deposit",
                  type: "uint112",
                },
                {
                  internalType: "bool",
                  name: "staked",
                  type: "bool",
                },
                {
                  internalType: "uint112",
                  name: "stake",
                  type: "uint112",
                },
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
                {
                  internalType: "uint48",
                  name: "withdrawTime",
                  type: "uint48",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getDepositInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint112",
                      name: "deposit",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "staked",
                      type: "bool",
                    },
                    {
                      internalType: "uint112",
                      name: "stake",
                      type: "uint112",
                    },
                    {
                      internalType: "uint32",
                      name: "unstakeDelaySec",
                      type: "uint32",
                    },
                    {
                      internalType: "uint48",
                      name: "withdrawTime",
                      type: "uint48",
                    },
                  ],
                  internalType: "struct IStakeManager.DepositInfo",
                  name: "info",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
              ],
              name: "getSenderAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "getUserOpHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "initCode",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "callData",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "paymasterAndData",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "signature",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct UserOperation[]",
                      name: "userOps",
                      type: "tuple[]",
                    },
                    {
                      internalType: "contract IAggregator",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                  name: "opsPerAggregator",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleAggregatedOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation[]",
                  name: "ops",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "incrementNonce",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "callData",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "address",
                          name: "paymaster",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct EntryPoint.MemoryUserOp",
                      name: "mUserOp",
                      type: "tuple",
                    },
                    {
                      internalType: "bytes32",
                      name: "userOpHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "contextOffset",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct EntryPoint.UserOpInfo",
                  name: "opInfo",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "context",
                  type: "bytes",
                },
              ],
              name: "innerHandleOp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "",
                  type: "uint192",
                },
              ],
              name: "nonceSequenceNumber",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "op",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "targetCallData",
                  type: "bytes",
                },
              ],
              name: "simulateHandleOp",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "simulateValidation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unlockStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
              ],
              name: "withdrawStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "withdrawAmount",
                  type: "uint256",
                },
              ],
              name: "withdrawTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        NBANFT: {
          address: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "image",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ERC721Metadata__URI_QueryFor_NonExistentToken",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTokenCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "mintNft",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "svg",
                  type: "string",
                },
              ],
              name: "svgToImageURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Token: {
          address: "0x6f77063e7278797Eaa2E9b643D8d822e13Da07C4",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
