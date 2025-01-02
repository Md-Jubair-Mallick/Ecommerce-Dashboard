import React from 'react';
import { useMe } from '../../state/queries/user';

function Me() {
  const { me, error, isLoading } = useMe();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-500">Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Profile</h1>
      <div className="text-lg text-gray-700">
        <p className="mb-2">
          <span className="font-semibold">Name:</span> {me?.name || 'N/A'}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {me?.email || 'N/A'}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Role:</span> {me?.role || 'N/A'}
        </p>
      </div>
    </div>
  );
}

export default Me;
