import {UrlMatchResult, UrlSegment} from "@angular/router";

export const appUrlmatcher = (urlSegment: UrlSegment[]): UrlMatchResult | null => {
  console.log(urlSegment)
  if (urlSegment.length === 0) {
    return null;
  }

  if (urlSegment.length === 2 && urlSegment[1].path === "home") {
    return {
      consumed: urlSegment.slice(0, 1)
    };
  }

  if (urlSegment.length === 2 && urlSegment[1].path === "login") {
    return {
      consumed: urlSegment.slice(0, 1)
    };
  }

  return null;
};
