import {isRouteErrorResponse, useRouteError} from "react-router";
import {useSEO} from "../../shared/hooks/useSEO";

export default function ErrorPage() {
    useSEO({ title: 'Error | CRM', description: 'Page not found or access denied' });
    const error = useRouteError()
    console.log(error)
    if(isRouteErrorResponse(error)) {
        if(error.status === 404) {
            return(
                <div className="error-page">
                    <h1>404</h1>
                    <p>Error</p>
                </div>
            )
        }
        if(error.status === 401) {
            return(
                <div className="error-page">
                    <h1>401</h1>
                    <p>Error</p>
                </div>
            )
        }
    }

    return(
        <div className="error-page">
            <h1>?</h1>
            <p>Error</p>
        </div>
    )
}