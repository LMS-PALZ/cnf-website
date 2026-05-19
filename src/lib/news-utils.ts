export function formatNewsDate(iso: string) {
    return new Intl.DateTimeFormat("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(iso));
}
