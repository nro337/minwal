'use client'

import { User } from "@prisma/client";
import { ChangeEvent, useState } from "react"
import UsersDropdown from "./users";

export const CreateGroupForm = ({users}:{users: User[]}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [localUsers, setLocalUsers] = useState(users)
  const [formValues, setFormValues] = useState({
    name: "",
    private: false,
    users: localUsers
  });
  const [error, setError] = useState<boolean>(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: "", private: false, users: [] });

    try {
      const res = await fetch("/api/creategroup", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      // signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormValues({ ...formValues, [name]: value, ['private']: checked ? true : false, users: users });
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="mb-6 rounded bg-red-300 py-4 text-center">{error}</p>
      )}
      <div className="mb-6">
        <input
          required
          type="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
          className={`${input_style}`}
        />
      </div>
      <label htmlFor="private">
        Private Group?
      </label>
      <div className="mb-6">
        <input
          id="private"
          type="checkbox"
          name="private"
          checked={formValues.private}
          onChange={handleChange}
          className={`${input_style}`}
        />
      </div>
      <UsersDropdown users={users} />
      <button
        type="submit"
        style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
        className="inline-block w-full rounded bg-blue-600 px-7 py-4 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        disabled={loading}
      >
        {loading ? "loading..." : "Create Group"}
      </button>
    </form>
  );
}