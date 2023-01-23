import { GithubUser } from "../models/GithubUser";
import { GithubUserRepository } from "../models/GithubUserRepository";
import { httpGet } from "../network/http";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

export const getGithubUserInformation = async (githubUserId: string): Promise<GithubUser> => {
  try {
    return await httpGet(`${GITHUB_API_URL}/users/${githubUserId}`, {
      Authorization: `token ${GITHUB_TOKEN}`
    });
  } catch (error) {
    console.log("Error during getGithubUserInformation ", error);
    throw error;
  }
};

export const getGithubUserRepositories = async (githubUserId: string): Promise<GithubUserRepository[]> => {
  try {
    return await httpGet(`${GITHUB_API_URL}/users/${githubUserId}/repos`, {
      Authorization: `token ${GITHUB_TOKEN}`
    });
  } catch (error) {
    console.log("Error during getGithubUserRepositories ", error);
    throw error;
  }
};