"use client";

import { Suspense, useEffect, useState } from "react";
import { getBooks, useDispatch, useSelector } from "@/lib/redux";
import Table from "./components/Table/Table";
import Loading from "./loading";
import TablePagination from "./components/TablePagination/TablePagination";
import { useRouter } from "next/navigation";

export default function IndexPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getBooks(Number(searchParams.page) || 1));
    setIsLoading(false);
  }, [searchParams.page]);

  if (isLoading) {
    return <Loading columns={6} rows={10} />;
  }

  if (books.status == "failed") {
    return <div>Something went wrong</div>;
  }

  if (books.value.length === 0 && books.status !== "loading") {
    return <div>No books found</div>;
  }

  return (
    <div>
      <TablePagination
        currentPage={Number(searchParams.page) || 1}
        totalPages={Math.ceil(books.count / 10)}
        onPageChange={(page) => {
          router.push(`/?page=${page}`);
        }}
      />
      <Table headers={Object.keys(books.value[0] ?? [])} rows={books.value} />
    </div>
  );
}
