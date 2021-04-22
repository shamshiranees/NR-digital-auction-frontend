import gql from "graphql-tag";

export const getAllUsers = gql(`query MyQuery {
    listUsers {
      items {
        id
        mobile_number
        type
        status
      }
    }
  }`);

export const getAllProjects = gql(`query MyQuery {
    listProjects {
      items {
        updatedAt
        status
        start_date
        portions
        other_comments
        minimum_fund_required
        name
        location
        images
        id
        fund_received
        fund
        end_date
        duration
        documents
        detailed_description
        description
        crop
        createdAt
      }
    }
  }`);

export const createNewProject = gql(`mutation MyMutation($createProjectInput: CreateProjectInput = {}) {
    createProject(input: $createProjectInput) {
      id
      name
      minimum_fund_required
      location
      images
      fund_received
      fund
      end_date
      duration
      start_date
      status
      other_comments
      portions
      documents
      detailed_description
      description
      crop
      createdAt
     
    }
  }
  `);

export const updateProject = gql(`mutation MyMutation($updateProjectInput: CreateProjectInput = {}) {
    updateProject(input: $updateProjectInput) {
      id
      name
      minimum_fund_required
      location
      images
      fund_received
      fund
      end_date
      duration
      start_date
      status
      other_comments
      portions
      documents
      detailed_description
      description
      crop
      createdAt
     
    }
  }
  `);
