import React from 'react';
// import { Icon } from 'components/Icon/Icon';
import Title from 'components/Title/Title';
import Loading from 'components/Loading/Loading';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import CheckboxList from 'components/CheckboxList/CheckboxList';
import { useGetCommentByIdQuery } from 'services/comment';

export type SheetContentProps = {
  className?: string;
};

const SheetContent: React.FC<SheetContentProps> = ({ className = '' }) => {
  const { data, error, isLoading } = useGetCommentByIdQuery(2);
  console.log(data);
  if (error) return <p>There is error while fetching data</p>;
  if (isLoading) return <Loading />;

  return (
    <div className={className}>
      {data && (
        <>
          <div className="mb-6">
            <Title>{data.name}</Title>
            <p className="text-sm text-light-black">{`(${data.email})`}</p>
          </div>

          <h3 className="text-lg font-normal text-black">
            Hosted by <strong className="text-danger">Rebecca Countryman</strong>
          </h3>

          <div className="mt-6">
            <CheckboxList />
          </div>

          <div className="mt-6">
            <h5 className="mb-1 text-base font-bold text-black">What&apos;s it about?</h5>
            <p className="text-base text-black">{data.body}</p>
          </div>

          <div className="mt-6"></div>
          <div className="pt-5 pb-10">
            <SocialIcons />
          </div>
        </>
      )}
    </div>
  );
};

export default SheetContent;
