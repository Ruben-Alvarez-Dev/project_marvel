interface Props {
    url: string;
}

export const Main = ({url}: Props) => {
    return (
        <div>
        <h1>Main</h1>
        {url}
        </div>
    );
} 