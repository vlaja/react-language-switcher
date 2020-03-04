import React from 'react';

interface ReactRouterMiddlewareProps {
  routerComponent: React.ComponentType;
  routes: {
    [prop: string]: {
      title: string;
      path: string;
      component: React.ComponentType;
    };
  };
  rewrites?: { [prop: string]: string };
  prefixDefaultLanguage?: boolean;
  trailingSlash?: boolean;
}

export const ReactRouterMiddleware: React.FC<ReactRouterMiddlewareProps> = ({
  children,
  routerComponent,
  // trailingSlash = false,
  rewrites,
  routes,
}) => {
  // const { registerMiddleware } = useSwitcherContext();
  // const language = useSwitcherSelector('language');
  // /**
  //  * Rewrites run first
  //  */
  // const rewriteRedirect = (pathname: string) =>
  //   rewrites && rewrites[pathname] && <Redirect to={rewrites[pathname]} />;
  // /**
  //  * Sets the current language from url regex match
  //  */
  // const [currentLanguage, setCurrentLanguage] = useState(language);
  // useEffect(() => {
  //   // if (setLanguage) {
  //   //   setLanguage(currentLanguage);
  //   // }
  // }, [currentLanguage]);
  // const matchRedirect = (match: match<any> | null) => {
  //   const { lang } = match?.params || {};
  //   if (lang && lang !== language) {
  //     setCurrentLanguage(lang);
  //   }
  //   return;
  // };
  // /**
  //  * Picks the language config based on current app language
  //  * Returnes route registrations for current language and children
  //  */
  // const localizedRoutesWithChildren = (children: ReactNode) => (
  //   <React.Fragment>
  //     {routes[language] &&
  //       Object.keys(routes[language]).map(key => {
  //         const path = routes[language][key].path;
  //         const localizedRoute = routes[language][key].component;
  //         return (
  //           localizedRoute && (
  //             <Route key={key} exact path={path}>
  //               {localizedRoute}
  //             </Route>
  //           )
  //         );
  //       })}
  //     {children}
  //   </React.Fragment>
  // );
  // const RouterComponent = routerComponent;
  // const ReactRouterMiddleware = () => (
  //   <RouterComponent>
  //     <Route path="/:lang([a-zA-Z]{2})">
  //       {({ location, match }) =>
  //         rewriteRedirect(location.pathname) ||
  //         matchRedirect(match) ||
  //         localizedRoutesWithChildren(children)
  //       }
  //     </Route>
  //   </RouterComponent>
  // );
  // useEffect(() => {
  //   if (registerMiddleware) {
  //     registerMiddleware(ReactRouterMiddleware, !!children, { routes });
  //   }
  // }, []);
  // return <ReactRouterMiddleware />;
};
