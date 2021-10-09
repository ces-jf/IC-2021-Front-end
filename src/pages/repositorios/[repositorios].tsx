import { useRouter } from "next/router";
import { LogoUniAc } from "../../components/LogoUniAc";
import { BsArrowReturnLeft } from 'react-icons/bs';
import Link from 'next/link';
import styles from '../../styles/pages/repositorios.module.css';
import doAuth from '../../helpers/authHelper';
import { Avatar } from "../../components/Avatar";

export default function Repositorios() {
    const resStr = `{
        "id": 76425236,
        "node_id": "MDEwOlJlcG9zaXRvcnk3NjQyNTIzNg==",
        "name": "EquinoxProject",
        "full_name": "EduardoPires/EquinoxProject",
        "private": false,
        "owner": {
          "login": "EduardoPires",
          "id": 5068797,
          "node_id": "MDQ6VXNlcjUwNjg3OTc=",
          "avatar_url": "https://avatars.githubusercontent.com/u/5068797?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/EduardoPires",
          "html_url": "https://github.com/EduardoPires",
          "followers_url": "https://api.github.com/users/EduardoPires/followers",
          "following_url": "https://api.github.com/users/EduardoPires/following{/other_user}",
          "gists_url": "https://api.github.com/users/EduardoPires/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/EduardoPires/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/EduardoPires/subscriptions",
          "organizations_url": "https://api.github.com/users/EduardoPires/orgs",
          "repos_url": "https://api.github.com/users/EduardoPires/repos",
          "events_url": "https://api.github.com/users/EduardoPires/events{/privacy}",
          "received_events_url": "https://api.github.com/users/EduardoPires/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/EduardoPires/EquinoxProject",
        "description": "Full ASP.NET Core 5 application with DDD, CQRS and Event Sourcing concepts",
        "fork": false,
        "url": "https://api.github.com/repos/EduardoPires/EquinoxProject",
        "forks_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/forks",
        "keys_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/teams",
        "hooks_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/hooks",
        "issue_events_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/issues/events{/number}",
        "events_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/events",
        "assignees_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/assignees{/user}",
        "branches_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/branches{/branch}",
        "tags_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/tags",
        "blobs_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/languages",
        "stargazers_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/stargazers",
        "contributors_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/contributors",
        "subscribers_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/subscribers",
        "subscription_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/subscription",
        "commits_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/contents/{+path}",
        "compare_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/merges",
        "archive_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/downloads",
        "issues_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/issues{/number}",
        "pulls_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/labels{/name}",
        "releases_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/releases{/id}",
        "deployments_url": "https://api.github.com/repos/EduardoPires/EquinoxProject/deployments",
        "created_at": "2016-12-14T04:36:58Z",
        "updated_at": "2021-10-08T07:29:25Z",
        "pushed_at": "2021-09-06T19:50:34Z",
        "git_url": "git://github.com/EduardoPires/EquinoxProject.git",
        "ssh_url": "git@github.com:EduardoPires/EquinoxProject.git",
        "clone_url": "https://github.com/EduardoPires/EquinoxProject.git",
        "svn_url": "https://github.com/EduardoPires/EquinoxProject",
        "homepage": "http://equinoxproject.azurewebsites.net/",
        "size": 1572,
        "stargazers_count": 5015,
        "watchers_count": 5015,
        "language": "C#",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "forks_count": 1357,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 8,
        "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
        },
        "allow_forking": true,
        "is_template": false,
        "topics": [
          "architecture",
          "asp-net-core",
          "asp-net-core-mvc",
          "asp-net-identity",
          "aspnet-core",
          "aspnetcore",
          "automapper",
          "clean-code",
          "cqrs",
          "ddd",
          "ef-core",
          "equinox",
          "event-sourcing",
          "eventstore",
          "fluentvalidation",
          "jwt",
          "mediatr",
          "onion-architecture",
          "swagger",
          "visual-studio"
        ],
        "visibility": "public",
        "forks": 1357,
        "open_issues": 8,
        "watchers": 5015,
        "default_branch": "master",
        "temp_clone_token": null,
        "network_count": 1357,
        "subscribers_count": 496
      }`;
    const mockApi = JSON.parse(resStr);

    const authenticated = doAuth();
    if (authenticated) {
        const router = useRouter();
        const nomeRepositorio = router.query.repositorios;
    
        return (
            <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <LogoUniAc/>
                </div>
                <Link href='/repositorios'>
                    <div className={styles.voltar}>
                        <BsArrowReturnLeft/>
                    </div>
                </Link>
                <div className={styles.content}>
                    <div className={styles.cabecalho}>
                        <div className={styles.avatar}>
                            <Avatar src={mockApi.owner.avatar_url}/>
                        </div>
                        <div className={styles.innerCabecalho}>
                            <h1>{mockApi.name}</h1>
                            <h2>{mockApi.owner.login}</h2>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    } else {
        return (null);
    }
}