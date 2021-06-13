var DataTypes = require("sequelize").DataTypes;
var _AccessLevel = require("./AccessLevel");
var _AccessLevelDesignations = require("./AccessLevelDesignations");
var _AdminRoles = require("./AdminRoles");
var _AdminTypes = require("./AdminTypes");
var _AdminUsers = require("./AdminUsers");
var _Approval_master = require("./Approval_master");
var _Constants = require("./Constants");
var _Departments = require("./Departments");
var _Feedback = require("./Feedback");
var _GroupMembers = require("./GroupMembers");
var _ReportAccess = require("./ReportAccess");
var _ReportCategoryMaster = require("./ReportCategoryMaster");
var _ReportFilters = require("./ReportFilters");
var _ReportMoreInfo = require("./ReportMoreInfo");
var _ReportRequests = require("./ReportRequests");
var _ReportSubscription = require("./ReportSubscription");
var _ReportSubscriptionLogs = require("./ReportSubscriptionLogs");
var _Reports = require("./Reports");
var _UserGroups = require("./UserGroups");
var _User_action_types = require("./User_action_types");
var _User_actions = require("./User_actions");
var _Users = require("./Users");

function initModels(sequelize) {
  var AccessLevel = _AccessLevel(sequelize, DataTypes);
  var AccessLevelDesignations = _AccessLevelDesignations(sequelize, DataTypes);
  var AdminRoles = _AdminRoles(sequelize, DataTypes);
  var AdminTypes = _AdminTypes(sequelize, DataTypes);
  var AdminUsers = _AdminUsers(sequelize, DataTypes);
  var Approval_master = _Approval_master(sequelize, DataTypes);
  var Constants = _Constants(sequelize, DataTypes);
  var Departments = _Departments(sequelize, DataTypes);
  var Feedback = _Feedback(sequelize, DataTypes);
  var GroupMembers = _GroupMembers(sequelize, DataTypes);
  var ReportAccess = _ReportAccess(sequelize, DataTypes);
  var ReportCategoryMaster = _ReportCategoryMaster(sequelize, DataTypes);
  var ReportFilters = _ReportFilters(sequelize, DataTypes);
  var ReportMoreInfo = _ReportMoreInfo(sequelize, DataTypes);
  var ReportRequests = _ReportRequests(sequelize, DataTypes);
  var ReportSubscription = _ReportSubscription(sequelize, DataTypes);
  var ReportSubscriptionLogs = _ReportSubscriptionLogs(sequelize, DataTypes);
  var Reports = _Reports(sequelize, DataTypes);
  var UserGroups = _UserGroups(sequelize, DataTypes);
  var User_action_types = _User_action_types(sequelize, DataTypes);
  var User_actions = _User_actions(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  AccessLevelDesignations.belongsTo(AccessLevel, { as: "Al", foreignKey: "AlId"});
  AccessLevel.hasMany(AccessLevelDesignations, { as: "AccessLevelDesignations", foreignKey: "AlId"});
  AdminUsers.belongsTo(AdminRoles, { as: "AdminRole", foreignKey: "AdminRoleID"});
  AdminRoles.hasMany(AdminUsers, { as: "AdminUsers", foreignKey: "AdminRoleID"});
  AdminRoles.belongsTo(AdminTypes, { as: "AdminRoleType_AdminType", foreignKey: "AdminRoleType"});
  AdminTypes.hasMany(AdminRoles, { as: "AdminRoles", foreignKey: "AdminRoleType"});
  AccessLevelDesignations.belongsTo(Departments, { as: "Department", foreignKey: "DepartmentId"});
  Departments.hasMany(AccessLevelDesignations, { as: "AccessLevelDesignations", foreignKey: "DepartmentId"});
  Feedback.belongsTo(Departments, { as: "Department", foreignKey: "DepartmentId"});
  Departments.hasMany(Feedback, { as: "Feedbacks", foreignKey: "DepartmentId"});
  ReportAccess.belongsTo(Departments, { as: "Department", foreignKey: "DepartmentId"});
  Departments.hasMany(ReportAccess, { as: "ReportAccesses", foreignKey: "DepartmentId"});
  ReportCategoryMaster.belongsTo(Departments, { as: "Department", foreignKey: "DepartmentId"});
  Departments.hasMany(ReportCategoryMaster, { as: "ReportCategoryMasters", foreignKey: "DepartmentId"});
  Reports.belongsTo(Departments, { as: "Department", foreignKey: "DepartmentId"});
  Departments.hasMany(Reports, { as: "Reports", foreignKey: "DepartmentId"});
  UserGroups.belongsTo(Departments, { as: "Dept", foreignKey: "DeptId"});
  Departments.hasMany(UserGroups, { as: "UserGroups", foreignKey: "DeptId"});
  Users.belongsTo(Departments, { as: "Department", foreignKey: "DepartmentId"});
  Departments.hasMany(Users, { as: "Users", foreignKey: "DepartmentId"});
  Reports.belongsTo(ReportCategoryMaster, { as: "Category", foreignKey: "CategoryId"});
  ReportCategoryMaster.hasMany(Reports, { as: "Reports", foreignKey: "CategoryId"});
  ReportSubscriptionLogs.belongsTo(ReportSubscription, { as: "ReportSubscription", foreignKey: "ReportSubscriptionId"});
  ReportSubscription.hasMany(ReportSubscriptionLogs, { as: "ReportSubscriptionLogs", foreignKey: "ReportSubscriptionId"});
  Approval_master.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(Approval_master, { as: "Approval_masters", foreignKey: "ReportId"});
  ReportAccess.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(ReportAccess, { as: "ReportAccesses", foreignKey: "ReportId"});
  ReportFilters.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(ReportFilters, { as: "ReportFilters", foreignKey: "ReportId"});
  ReportMoreInfo.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(ReportMoreInfo, { as: "ReportMoreInfos", foreignKey: "ReportId"});
  ReportRequests.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(ReportRequests, { as: "ReportRequests", foreignKey: "ReportId"});
  ReportSubscription.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(ReportSubscription, { as: "ReportSubscriptions", foreignKey: "ReportId"});
  User_actions.belongsTo(Reports, { as: "Report", foreignKey: "ReportId"});
  Reports.hasMany(User_actions, { as: "User_actions", foreignKey: "ReportId"});
  GroupMembers.belongsTo(UserGroups, { as: "Team", foreignKey: "TeamId"});
  UserGroups.hasMany(GroupMembers, { as: "GroupMembers", foreignKey: "TeamId"});
  ReportAccess.belongsTo(UserGroups, { as: "Team", foreignKey: "TeamId"});
  UserGroups.hasMany(ReportAccess, { as: "ReportAccesses", foreignKey: "TeamId"});
  User_actions.belongsTo(User_action_types, { as: "ActionType_User_action_type", foreignKey: "ActionType"});
  User_action_types.hasMany(User_actions, { as: "User_actions", foreignKey: "ActionType"});
  AdminUsers.belongsTo(Users, { as: "User", foreignKey: "UserID"});
  Users.hasMany(AdminUsers, { as: "AdminUsers", foreignKey: "UserID"});
  GroupMembers.belongsTo(Users, { as: "User", foreignKey: "UserId"});
  Users.hasMany(GroupMembers, { as: "GroupMembers", foreignKey: "UserId"});
  ReportAccess.belongsTo(Users, { as: "User", foreignKey: "UserId"});
  Users.hasMany(ReportAccess, { as: "ReportAccesses", foreignKey: "UserId"});
  ReportSubscription.belongsTo(Users, { as: "User", foreignKey: "UserId"});
  Users.hasMany(ReportSubscription, { as: "ReportSubscriptions", foreignKey: "UserId"});

  return {
    AccessLevel,
    AccessLevelDesignations,
    AdminRoles,
    AdminTypes,
    AdminUsers,
    Approval_master,
    Constants,
    Departments,
    Feedback,
    GroupMembers,
    ReportAccess,
    ReportCategoryMaster,
    ReportFilters,
    ReportMoreInfo,
    ReportRequests,
    ReportSubscription,
    ReportSubscriptionLogs,
    Reports,
    UserGroups,
    User_action_types,
    User_actions,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
