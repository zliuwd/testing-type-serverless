(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var express = __webpack_require__(/*! express */ "express");
var graphql_playground_middleware_express_1 = __webpack_require__(/*! graphql-playground-middleware-express */ "graphql-playground-middleware-express");
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var morgan = __webpack_require__(/*! morgan */ "morgan");
var serverless = __webpack_require__(/*! serverless-http */ "serverless-http");
var schema_1 = __webpack_require__(/*! ./src/schema */ "./src/schema/index.ts");
var resolvers_1 = __webpack_require__(/*! ./src/resolvers */ "./src/resolvers/index.ts");
var prisma_client_1 = __webpack_require__(/*! ./src/generated/prisma-client */ "./src/generated/prisma-client/index.ts");
var routes_1 = __webpack_require__(/*! ./src/restful/routes */ "./src/restful/routes/index.ts");
exports.app = express();
exports.app.use(morgan('dev'));
exports.app.use(routes_1["default"]);
exports.app.disable('etag');
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1["default"],
    resolvers: resolvers_1["default"],
    context: {
        prisma: prisma_client_1.prisma,
    },
    introspection: true,
    playground: true,
});
server.applyMiddleware({ app: exports.app });
exports.app.get('/playground', graphql_playground_middleware_express_1["default"]({ endpoint: '/graphql' }));
var handler = serverless(exports.app);
exports.handler = handler;


/***/ }),

/***/ "./source-map-install.js":
/*!*******************************!*\
  !*** ./source-map-install.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! source-map-support */ "source-map-support").install();


/***/ }),

/***/ "./src/generated/prisma-client/index.ts":
/*!**********************************************!*\
  !*** ./src/generated/prisma-client/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Code generated by Prisma (prisma@1.34.7). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
exports.__esModule = true;
var prisma_client_lib_1 = __webpack_require__(/*! prisma-client-lib */ "prisma-client-lib");
var prisma_schema_1 = __webpack_require__(/*! ./prisma-schema */ "./src/generated/prisma-client/prisma-schema.ts");
/**
 * Model Metadata
 */
exports.models = [
    {
        name: "User",
        embedded: false
    }
];
/**
 * Type Defs
 */
exports.Prisma = prisma_client_lib_1.makePrismaClientClass({
    typeDefs: prisma_schema_1.typeDefs,
    models: exports.models,
    endpoint: "http://localhost:4466"
});
exports.prisma = new exports.Prisma();


/***/ }),

/***/ "./src/generated/prisma-client/prisma-schema.ts":
/*!******************************************************!*\
  !*** ./src/generated/prisma-client/prisma-schema.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Code generated by Prisma (prisma@1.34.7). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
exports.__esModule = true;
exports.typeDefs = "type AggregateUser {\n  count: Int!\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\nscalar Long\n\ntype Mutation {\n  createUser(data: UserCreateInput!): User!\n  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User\n  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!\n  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!\n  deleteUser(where: UserWhereUniqueInput!): User\n  deleteManyUsers(where: UserWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  user(where: UserWhereUniqueInput!): User\n  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!\n  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!\n  node(id: ID!): Node\n}\n\ntype Subscription {\n  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n}\n\ntype UserConnection {\n  pageInfo: PageInfo!\n  edges: [UserEdge]!\n  aggregate: AggregateUser!\n}\n\ninput UserCreateInput {\n  id: ID\n  name: String!\n  email: String!\n}\n\ntype UserEdge {\n  node: User!\n  cursor: String!\n}\n\nenum UserOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  email_ASC\n  email_DESC\n}\n\ntype UserPreviousValues {\n  id: ID!\n  name: String!\n  email: String!\n}\n\ntype UserSubscriptionPayload {\n  mutation: MutationType!\n  node: User\n  updatedFields: [String!]\n  previousValues: UserPreviousValues\n}\n\ninput UserSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: UserWhereInput\n  AND: [UserSubscriptionWhereInput!]\n  OR: [UserSubscriptionWhereInput!]\n  NOT: [UserSubscriptionWhereInput!]\n}\n\ninput UserUpdateInput {\n  name: String\n  email: String\n}\n\ninput UserUpdateManyMutationInput {\n  name: String\n  email: String\n}\n\ninput UserWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  email: String\n  email_not: String\n  email_in: [String!]\n  email_not_in: [String!]\n  email_lt: String\n  email_lte: String\n  email_gt: String\n  email_gte: String\n  email_contains: String\n  email_not_contains: String\n  email_starts_with: String\n  email_not_starts_with: String\n  email_ends_with: String\n  email_not_ends_with: String\n  AND: [UserWhereInput!]\n  OR: [UserWhereInput!]\n  NOT: [UserWhereInput!]\n}\n\ninput UserWhereUniqueInput {\n  id: ID\n}\n";


/***/ }),

/***/ "./src/resolvers/index.ts":
/*!********************************!*\
  !*** ./src/resolvers/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var user_1 = __webpack_require__(/*! ./user */ "./src/resolvers/user.ts");
exports["default"] = [user_1["default"]];


/***/ }),

/***/ "./src/resolvers/user.ts":
/*!*******************************!*\
  !*** ./src/resolvers/user.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports["default"] = {
    Query: {
        users: function (parent, args, ctx) { return ctx.prisma.users(); },
    },
    Mutation: {
        signUp: function (parent, args, ctx) {
            var newUser = ctx.prisma.createUser(args);
            return newUser;
        },
        deleteUser: function (parent, args, ctx) {
            return ctx.prisma.deleteUser({ id: args.id });
        },
    },
};


/***/ }),

/***/ "./src/restful/routes/index.ts":
/*!*************************************!*\
  !*** ./src/restful/routes/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var express_1 = __webpack_require__(/*! express */ "express");
var testMsg_1 = __webpack_require__(/*! ./testMsg */ "./src/restful/routes/testMsg.ts");
var router = express_1.Router();
router.use('/restful/test', testMsg_1["default"]);
exports["default"] = router;


/***/ }),

/***/ "./src/restful/routes/testMsg.ts":
/*!***************************************!*\
  !*** ./src/restful/routes/testMsg.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var express_1 = __webpack_require__(/*! express */ "express");
var router = express_1.Router();
router.get('/', function (req, res) { return res.send('this is the restful api return msg'); });
exports["default"] = router;


/***/ }),

/***/ "./src/schema/index.ts":
/*!*****************************!*\
  !*** ./src/schema/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var userSchema_1 = __webpack_require__(/*! ./userSchema */ "./src/schema/userSchema.ts");
var linkSchema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar Date\n\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"], ["\n  scalar Date\n\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"])));
exports["default"] = [linkSchema, userSchema_1["default"]];
var templateObject_1;


/***/ }),

/***/ "./src/schema/userSchema.ts":
/*!**********************************!*\
  !*** ./src/schema/userSchema.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
exports["default"] = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    hello: String\n  }\n\n  extend type Query {\n    users: [User]\n    user(id: ID!): User\n  }\n  extend type Mutation {\n    signUp(name: String!, email: String!): User!\n\n    deleteUser(id: ID!): User!\n  }\n\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n  }\n"], ["\n  extend type Query {\n    hello: String\n  }\n\n  extend type Query {\n    users: [User]\n    user(id: ID!): User\n  }\n  extend type Mutation {\n    signUp(name: String!, email: String!): User!\n\n    deleteUser(id: ID!): User!\n  }\n\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./source-map-install.js ./index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source-map-install.js */"./source-map-install.js");
module.exports = __webpack_require__(/*! ./index.ts */"./index.ts");


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-playground-middleware-express":
/*!********************************************************!*\
  !*** external "graphql-playground-middleware-express" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-playground-middleware-express");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "prisma-client-lib":
/*!************************************!*\
  !*** external "prisma-client-lib" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prisma-client-lib");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map