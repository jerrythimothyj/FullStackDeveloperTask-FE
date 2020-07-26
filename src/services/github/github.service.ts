import { ajaxPost } from "../api/api.service";

export const fetchGithubUsers = (text: string, type: string, page: number, per_page: number) => ajaxPost("search", { text, type, page, per_page })