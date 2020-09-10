// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Client = require("./gql/Client.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var ApolloClient = require("reason-apollo-client/src/ApolloClient.bs.js");
var Async$BsMocha = require("bs-mocha/src/Async.bs.js");
var Mocha$BsMocha = require("bs-mocha/src/Mocha.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var RejectedError = Caml_exceptions.create("Test.RejectedError");

var Raw = {};

var query = (require("@apollo/client").gql`
  query AllStateChanges  {
    stateChanges(first: 1000, orderBy: timestamp, orderDirection: asc)  {
      id
      timestamp
      blockNumber
      contractVersion
      txEventList
      txEventParamListDeprecated
      patronChanges  {
        id
      }
      wildcardChanges  {
        id
      }
    }
  }
`);

function parse(value) {
  var value$1 = value.stateChanges;
  return {
          stateChanges: value$1.map(function (value) {
                var value$1 = value.txEventList;
                var value$2 = value.txEventParamListDeprecated;
                var value$3 = value.patronChanges;
                var value$4 = value.wildcardChanges;
                return {
                        id: value.id,
                        timestamp: value.timestamp,
                        blockNumber: value.blockNumber,
                        contractVersion: value.contractVersion,
                        txEventList: value$1.map(function (value) {
                              return value;
                            }),
                        txEventParamListDeprecated: value$2.map(function (value) {
                              return value;
                            }),
                        patronChanges: value$3.map(function (value) {
                              return {
                                      id: value.id
                                    };
                            }),
                        wildcardChanges: value$4.map(function (value) {
                              return {
                                      id: value.id
                                    };
                            })
                      };
              })
        };
}

function serialize(value) {
  var value$1 = value.stateChanges;
  var stateChanges = value$1.map(function (value) {
        var value$1 = value.wildcardChanges;
        var wildcardChanges = value$1.map(function (value) {
              var value$1 = value.id;
              return {
                      id: value$1
                    };
            });
        var value$2 = value.patronChanges;
        var patronChanges = value$2.map(function (value) {
              var value$1 = value.id;
              return {
                      id: value$1
                    };
            });
        var value$3 = value.txEventParamListDeprecated;
        var txEventParamListDeprecated = value$3.map(function (value) {
              return value;
            });
        var value$4 = value.txEventList;
        var txEventList = value$4.map(function (value) {
              return value;
            });
        var value$5 = value.contractVersion;
        var value$6 = value.blockNumber;
        var value$7 = value.timestamp;
        var value$8 = value.id;
        return {
                id: value$8,
                timestamp: value$7,
                blockNumber: value$6,
                contractVersion: value$5,
                txEventList: txEventList,
                txEventParamListDeprecated: txEventParamListDeprecated,
                patronChanges: patronChanges,
                wildcardChanges: wildcardChanges
              };
      });
  return {
          stateChanges: stateChanges
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var Z__INTERNAL = {
  _graphql_first_305: 0,
  _graphql_orderBy_318: 0,
  _graphql_orderDirection_338: 0,
  graphql_module: 0
};

var AllStateChanges$prime = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  Z__INTERNAL: Z__INTERNAL
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize
    });

var AllStateChanges_refetchQueryDescription = include.refetchQueryDescription;

var AllStateChanges_use = include.use;

var AllStateChanges_useLazy = include.useLazy;

var AllStateChanges_useLazyWithVariables = include.useLazyWithVariables;

var AllStateChanges = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  Z__INTERNAL: Z__INTERNAL,
  refetchQueryDescription: AllStateChanges_refetchQueryDescription,
  use: AllStateChanges_use,
  useLazy: AllStateChanges_useLazy,
  useLazyWithVariables: AllStateChanges_useLazyWithVariables
};

var Raw$1 = {};

var query$1 = (require("@apollo/client").gql`
  query BlockNumberQuery($blockNumber: Int!, $address: String!)  {
  patron(id: $address, block: {number: $blockNumber})  {
    id
    tokens  {
      id
    }
  }
}
`);

function parse$1(value) {
  var value$1 = value.patron;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.tokens;
    tmp = {
      id: value$1.id,
      tokens: value$2.map(function (value) {
            return {
                    id: value.id
                  };
          })
    };
  }
  return {
          patron: tmp
        };
}

function serialize$1(value) {
  var value$1 = value.patron;
  var patron;
  if (value$1 !== undefined) {
    var value$2 = value$1.tokens;
    var tokens = value$2.map(function (value) {
          var value$1 = value.id;
          return {
                  id: value$1
                };
        });
    var value$3 = value$1.id;
    patron = {
      id: value$3,
      tokens: tokens
    };
  } else {
    patron = null;
  }
  return {
          patron: patron
        };
}

function serializeVariables$1(inp) {
  return {
          blockNumber: inp.blockNumber,
          address: inp.address
        };
}

function makeVariables$1(blockNumber, address, param) {
  return serializeVariables$1({
              blockNumber: blockNumber,
              address: address
            });
}

var Z__INTERNAL$1 = {
  _graphql_address_959: 0,
  _graphql_id_955: 0,
  _graphql_block_969: 0,
  graphql_module: 0
};

var PatronAtBlockNumber$prime = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  Z__INTERNAL: Z__INTERNAL$1
};

var include$1 = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query$1,
      Raw: Raw$1,
      parse: parse$1,
      serialize: serialize$1
    });

var PatronAtBlockNumber_refetchQueryDescription = include$1.refetchQueryDescription;

var PatronAtBlockNumber_use = include$1.use;

var PatronAtBlockNumber_useLazy = include$1.useLazy;

var PatronAtBlockNumber_useLazyWithVariables = include$1.useLazyWithVariables;

var PatronAtBlockNumber = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  Z__INTERNAL: Z__INTERNAL$1,
  refetchQueryDescription: PatronAtBlockNumber_refetchQueryDescription,
  use: PatronAtBlockNumber_use,
  useLazy: PatronAtBlockNumber_useLazy,
  useLazyWithVariables: PatronAtBlockNumber_useLazyWithVariables
};

function exampleQuery(param) {
  var __x = ApolloClient.query(Client.instance, {
        query: query,
        Raw: Raw,
        parse: parse,
        serialize: serialize
      }, undefined, undefined, undefined, undefined);
  var __x$1 = __x.then(function (result) {
        var data = result.data;
        if (data !== undefined) {
          return Promise.resolve(data.stateChanges);
        } else {
          return Js_exn.raiseError("Error: no people!");
        }
      });
  return __x$1.catch(Js_exn.raiseError);
}

function examplePatronAtBlockNumber(blockNumber, address) {
  var __x = ApolloClient.query(Client.instance, {
        query: query$1,
        Raw: Raw$1,
        parse: parse$1,
        serialize: serialize$1
      }, undefined, undefined, undefined, serializeVariables$1({
            blockNumber: blockNumber,
            address: address
          }));
  var __x$1 = __x.then(function (result) {
        var data = result.data;
        if (data !== undefined) {
          return Promise.resolve(data.patron);
        } else {
          return Js_exn.raiseError("Error: no response");
        }
      });
  return __x$1.catch(Js_exn.raiseError);
}

function getAllStateChanges(param) {
  var __x = ApolloClient.query(Client.instance, {
        query: query,
        Raw: Raw,
        parse: parse,
        serialize: serialize
      }, undefined, undefined, undefined, undefined);
  var __x$1 = __x.then(function (result) {
        return Promise.resolve(result.data);
      });
  return __x$1.catch(Js_exn.raiseError);
}

function delay(fn) {
  setTimeout((function (param) {
          return Curry._1(fn, undefined);
        }), 300);
  
}

Mocha$BsMocha.describe("Graph Test")(undefined, undefined, undefined, (function (done_) {
        var allEvents = {
          contents: undefined
        };
        Async$BsMocha.before(undefined, undefined, undefined, undefined, (function (done_) {
                var __x = getAllStateChanges(undefined);
                __x.then(function (data) {
                      allEvents.contents = data;
                      return Promise.resolve(Curry._2(done_, undefined, undefined));
                    });
                
              }));
        return Mocha$BsMocha.describe("Fetching set value")(undefined, undefined, undefined, (function (param) {
                      return Async$BsMocha.it("patron of the wildcard should update correctly")(undefined, undefined, undefined, (function (done_) {
                                    var match = allEvents.contents;
                                    if (match !== undefined) {
                                      Belt_Array.map(match.stateChanges, (function (stateChange) {
                                              return Belt_Array.mapWithIndex(stateChange.txEventList, (function (index, $$event) {
                                                            console.log("event", $$event);
                                                            var argumentsJson = JSON.parse(Belt_Option.getWithDefault(Belt_Array.get(stateChange.txEventParamList, index), "THIS SHOULD NEVER HAPPEN"));
                                                            console.log("arguments", argumentsJson);
                                                            
                                                          }));
                                            }));
                                      return Curry._2(done_, undefined, undefined);
                                    } else {
                                      return Curry._2(done_, undefined, undefined);
                                    }
                                  }));
                    }));
      }));

var describe = Mocha$BsMocha.describe;

var before = Mocha$BsMocha.before;

exports.describe = describe;
exports.before = before;
exports.RejectedError = RejectedError;
exports.AllStateChanges$prime = AllStateChanges$prime;
exports.AllStateChanges = AllStateChanges;
exports.PatronAtBlockNumber$prime = PatronAtBlockNumber$prime;
exports.PatronAtBlockNumber = PatronAtBlockNumber;
exports.exampleQuery = exampleQuery;
exports.examplePatronAtBlockNumber = examplePatronAtBlockNumber;
exports.getAllStateChanges = getAllStateChanges;
exports.delay = delay;
/* query Not a pure module */
