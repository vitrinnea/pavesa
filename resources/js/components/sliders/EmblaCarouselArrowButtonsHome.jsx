import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg width="24" height="24" className='mx-auto' viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.81129 6.20492C2.92917 6.20492 3.0492 6.20492 3.16709 6.20492C7.74961 6.20492 10.2846 6.20492 14.8671 6.20684C15 6.20684 15.1328 6.21258 15.2657 6.19918C15.6773 6.15896 15.9602 5.86021 15.9538 5.48678C15.9473 5.12867 15.6623 4.84524 15.2614 4.80885C15.1307 4.79736 14.9957 4.80119 14.8628 4.80119C10.2931 4.80119 7.76675 4.80311 3.19709 4.80119C3.06849 4.80119 2.9356 4.82992 2.7084 4.72842C3.13279 4.37797 3.5336 4.06007 3.91726 3.72303C4.84749 2.9053 5.76913 2.078 6.69293 1.25454C7.02729 0.95579 7.04658 0.49235 6.74008 0.210839C6.42715 -0.0764175 5.9106 -0.0745025 5.54622 0.243394C4.82605 0.871528 4.11874 1.51307 3.40714 2.14886C2.40405 3.04319 1.40095 3.93751 0.402141 4.83375C-0.137989 5.31825 -0.133701 5.68977 0.412857 6.17811C2.07182 7.66035 3.72865 9.14451 5.38762 10.6248C5.48192 10.7091 5.57409 10.7972 5.6834 10.8623C6.0392 11.0787 6.51074 11.0327 6.77009 10.7608C7.04444 10.4755 7.01872 10.0542 6.69936 9.76881C5.47335 8.66958 4.24305 7.57226 3.01276 6.47686C2.9356 6.40791 2.83272 6.36387 2.74055 6.30642C2.76413 6.27003 2.78771 6.23556 2.81129 6.19917V6.20492Z" fill="#2C9C47"/>
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg width="24" height="24" className='mx-auto' viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1426 6.20492C13.0247 6.20492 12.9047 6.20492 12.7868 6.20492C8.20425 6.20492 5.66931 6.20492 1.08679 6.20684C0.953898 6.20684 0.82101 6.21258 0.688121 6.19918C0.276594 6.15896 -0.00633023 5.86021 9.98757e-05 5.48678C0.00652998 5.12867 0.291598 4.84524 0.692408 4.80885C0.823153 4.79736 0.958185 4.80119 1.09107 4.80119C5.66073 4.80119 8.18711 4.80311 12.7568 4.80119C12.8854 4.80119 13.0183 4.82992 13.2455 4.72842C12.8211 4.37797 12.4203 4.06007 12.0366 3.72303C11.1064 2.9053 10.1847 2.078 9.26093 1.25454C8.92657 0.95579 8.90728 0.49235 9.21378 0.210839C9.52671 -0.0764175 10.0433 -0.0745025 10.4076 0.243394C11.1278 0.871528 11.8351 1.51307 12.5467 2.14886C13.5498 3.04319 14.5529 3.93751 15.5517 4.83375C16.0918 5.31825 16.0876 5.68977 15.541 6.17811C13.882 7.66035 12.2252 9.14451 10.5662 10.6248C10.4719 10.7091 10.3798 10.7972 10.2705 10.8623C9.91466 11.0787 9.44312 11.0327 9.18377 10.7608C8.90942 10.4755 8.93514 10.0542 9.2545 9.76881C10.4805 8.66958 11.7108 7.57226 12.9411 6.47686C13.0183 6.40791 13.1211 6.36387 13.2133 6.30642C13.1897 6.27003 13.1661 6.23556 13.1426 6.19917V6.20492Z" fill="#2C9C47"/>
      </svg>
      {children}
    </button>
  );
};
